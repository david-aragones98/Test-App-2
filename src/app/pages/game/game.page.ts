import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {
  @ViewChild('gameCanvas', { static: true }) gameCanvas!: ElementRef;
  context!: CanvasRenderingContext2D;

  // Variables para ajustar el juego
  gridSize = 20;
  canvasSize = 400;
  snakeSize = this.gridSize;
  snake: { x: number; y: number }[] = [];
  direction: 'up' | 'down' | 'left' | 'right' = 'right';
  food: { x: number; y: number } = { x: 0, y: 0 };

  constructor() {}

  ngOnInit() {
    this.context = this.gameCanvas.nativeElement.getContext('2d');
    this.initGame();
    this.gameLoop();
    document.addEventListener('keydown', this.handleKeyDown.bind(this));
  }

  handleKeyDown(event: KeyboardEvent) {
    //Para controlar la serpiente
    switch (event.key) {
      case 'ArrowUp':
        this.changeDirection('up');
        break;
      case 'ArrowDown':
        this.changeDirection('down');
        break;
      case 'ArrowLeft':
        this.changeDirection('left');
        break;
      case 'ArrowRight':
        this.changeDirection('right');
        break;
    }
  }
  

  initGame() {
    // Inicializamos
    this.snake = [
      { x: 10, y: 10 },
      { x: 10, y: 11 },
      { x: 10, y: 12 },
    ];
    this.direction = 'right';
    this.food = this.generateFood();
  }

  gameLoop() {
    this.moveSnake();
    this.checkCollision();
    this.drawGame();

    setTimeout(() => {
      requestAnimationFrame(() => this.gameLoop());
    }, 100);
  }

  moveSnake() {
    // Hacer que la serpiente se mueva en contexto de donde apunta su cabeza
    const head = { ...this.snake[0] };
    switch (this.direction) {
      case 'up':
        head.y--;
        break;
      case 'down':
        head.y++;
        break;
      case 'left':
        head.x--;
        break;
      case 'right':
        head.x++;
        break;
    }

    this.snake.unshift(head); // Añadir nuevo segmento

    // le quitamos un segmento de cola si no se comio la fruta
    if (head.x !== this.food.x || head.y !== this.food.y) {
      this.snake.pop();
    } else {
      this.food = this.generateFood(); // generar nueva comida
    }
  }

  checkCollision() {
    const head = this.snake[0];

    // CHeckear colisiones con paredes o la propia serpiente
    if (
      head.x < 0 ||
      head.y < 0 ||
      head.x >= this.canvasSize / this.gridSize ||
      head.y >= this.canvasSize / this.gridSize ||
      this.snake.some((segment, index) => index !== 0 && segment.x === head.x && segment.y === head.y)
    ) {
      this.initGame(); // Resetear
    }
  }

  drawGame() {
    const ctx = this.context;

    // Limpiar el canvas
    ctx.clearRect(0, 0, this.canvasSize, this.canvasSize);

    // dibujar la serpiente
    ctx.fillStyle = 'green';
    this.snake.forEach((segment) => {
      ctx.fillRect(segment.x * this.gridSize, segment.y * this.gridSize, this.snakeSize, this.snakeSize);
    });

    // dibujar la fruta
    ctx.fillStyle = 'red';
    ctx.fillRect(this.food.x * this.gridSize, this.food.y * this.gridSize, this.snakeSize, this.snakeSize);
  }

  generateFood() {
    // Generamos la posicion random para la fruta
    const x = Math.floor(Math.random() * (this.canvasSize / this.gridSize));
    const y = Math.floor(Math.random() * (this.canvasSize / this.gridSize));
    return { x, y };
  }

  changeDirection(newDirection: 'up' | 'down' | 'left' | 'right') {
    // Para que no podamos cambiar a la direccion contraria
    if (
      (newDirection === 'up' && this.direction !== 'down') ||
      (newDirection === 'down' && this.direction !== 'up') ||
      (newDirection === 'left' && this.direction !== 'right') ||
      (newDirection === 'right' && this.direction !== 'left')
    ) {
      this.direction = newDirection;
    }
  }
}

