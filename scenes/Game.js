export default class Game extends Phaser.Scene {
  constructor() {
    super("game");
  }

  init() {
    //-- DATOS DE JUEGO PARA PASAR A OTRAS ESCENAS --
    
  }

  preload() {
    //-- PRELOAD DE IMAGENES --
    this.load.image("placeholder de camion", "public/assets/cuadrado de laberinto.png");
    this.load.image("placeholder de bici", "public/assets/estrella.png");
    this.load.image('placeholder de piedra', "public/assets/bala de jugador.png");
  }

  create() {
    //-- IMAGENES ESTATICAS --

    //-- BICICLETA --
    this.bici = this.physics.add.sprite(450, 500, "placeholder de bici");
    this.bici.setCollideWorldBounds(true);

    //-- CAMION --
    this.camion = this.physics.add.image(450, 100, "placeholder de camion");
    this.camion.setCollideWorldBounds(true);
    this.camion.setDepth(10);

    //-- CONTROLES
    this.controles = this.input.keyboard.createCursorKeys();

    //-- GENERACION DE OBJETOS --

    this.piedras = this.physics.add.group();
    this.input.keyboard.on('keydown-SPACE', () => {
      const piedra = this.piedras.create(this.bici.x, this.bici.y - 20, 'placeholder de piedra');
      piedra.setVelocityY(-300);
    });

    //-- COLISIONES --
  }

  update() {
    //-- MOVIMIENTO --
    if (this.controles.left.isDown) {
      this.bici.setVelocityX(-300);
    } else if (this.controles.right.isDown) {
      this.bici.setVelocityX(300);
    } else {
      this.bici.setVelocityX(0);
    }

  }
}
// EL CODIGO PROBABLEMENTE SE DEBA ACTUALIZAR A USAR CON CODIGO EN P.O.O (CLASS Y CON CARPETAS DEDICADAS A CADA ELEMENTO DEL JUEGO), ESTA LINEA ES SOLO UN RECORDATORIO POR FAVOR NO BORRAR HASTA ANTES DE LA ENTREGA FINAL
