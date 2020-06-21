import INameable from "../INameable";

const obj: object = { name: 'Jack' };

// obj.name <-- Property 'name' does not exist on type 'object'.
const name1 = (<INameable>obj).name;
const name2 = (obj as INameable).name;

console.log({ name1, name2 });