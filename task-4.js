let Student = {
    name: "Andrey",      
    age: 20,              
    isStudying: true,   
    subjects: ["Math", "History"], 
    address: {                   
        city: "Saint-P",
        street: "Nevskiy pr",
    },
    grades: new Map([  
        ["Math", 80],
        ["History", 70]
    ]),
    sayHello: function() {
        console.log("Hello, my name is " + this.name + "!");
    }
};

