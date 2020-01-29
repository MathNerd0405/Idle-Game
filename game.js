var game = new Phaser.Game(800, 600, Phaser.AUTO, '');

game.state.add('play',{
  preload: function(){
      game.load.image('skeleton','assets/allacrost_enemy_sprites/skeleton.png');
  },
  create: function(){
      var skeletonSprite = game.add.sprite(450, 290, 'skeleton');
      skeletonSprite.anchor.setTo(0.5,0.5);
      var state =this;
      
      this.background = this.game.add.group();
      ['forest-back', 'forest-lights','forest-middle','forest-front']
        .forEach(function(image) {
          var bg = state.game.add.tileSprite(0,0, state.game.world.width,
            state.game.world.height,image,'', state.background);
          bg.tileScale.setTo(4,4);
        });
  },
  render: function(){
      game.debug.text('Adventure Awaits!', 250, 290);
  }
});

game.state.start('play');
