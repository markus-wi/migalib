var Migalib = module.exports = {}; 

Migalib.PathFinder = require("../ai/pathfinder");
Migalib.Game = require("./game");
Migalib.Globals = require("./globals");
Migalib.Effect = require("../effect/effect");
Migalib.EffectManager = require("../effect/effectmanager");
Migalib.ScreenShake = require("../effect/screenshake");
Migalib.Entity = require("../entity/entity");
Migalib.EntityManager = require("../entity/entitymanager");
Migalib.Player = require("../entity/player");
Migalib.FontManager = require("../font/fontmanager");
Migalib.InputManager = require("../input/inputmanager");
Migalib.Keys = require("../input/keys");
Migalib.aStar = require("../lib/astar");
Migalib.Map = require("../map/map");
Migalib.MapGenerator = require("../map/mapgenerator");
Migalib.MapManager = require("../map/mapmanager");
Migalib.Particle = require("../particle/particle");
Migalib.ParticleEmiter = require("../particle/particleemiter");
Migalib.ParticleManager = require("../particle/particlemanager");
Migalib.Renderer = require("../render/renderer");
Migalib.TextureArea	= require("../render/texturearea");
Migalib.ResourceManager = require("../resource/resourcemanager");
Migalib.GameScreen = require("../screen/gamescreen");
Migalib.Screen = require("../screen/screen");
Migalib.ScreenManager = require("../screen/screenmanager");
Migalib.Tile = require("../tile/tile");
Migalib.WallTile = require("../tile/walltile");
Migalib.Directions = require("../util/directions");
Migalib.Logger = require("../util/logger");
Migalib.Rect = require("../util/rect");
