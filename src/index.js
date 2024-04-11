import { Modal } from "./modal.js";
import { ListBehaviours } from "./list.js";

const modal = Modal();
modal.showModal();
modal.closeModal();
const list = ListBehaviours();
list.addList();
list.addTaskToList();