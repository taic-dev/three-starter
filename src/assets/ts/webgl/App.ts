import { Mesh } from "./Mesh";
import { Setup } from "./Setup";

export class App {
  setup: Setup
  mesh: Mesh

  constructor() {
    this.setup = new Setup();
    this.mesh = new Mesh(this.setup);
  }

  init() {
    this.setup.init();
    this.mesh.init();
  }

  render() {
    if(!this.setup.scene || !this.setup.camera) return
    this.setup.renderer?.render(this.setup.scene, this.setup.camera)
  }

  update() {
    this.mesh.updateMesh();
  }

  resize() {
    this.setup.resize();
    this.mesh.resize();
  }
}