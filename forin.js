const object = {
    name: "Khali",
    age: 37,
    inClass: true,
};

for(const key in object) {
    console.log(key);
}
for (const key in object) {
    console.log(object[key]);
}