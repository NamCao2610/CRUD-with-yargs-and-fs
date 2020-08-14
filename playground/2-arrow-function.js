// const square = (x) => x * x;

// console.log(square(3));

const event = {
  name: "NAm dep zai",
  guestList: ["NAm", "Toi", "Hoang"],
  printGuestList() {
    console.log("Day la ten cua toi " + this.name);

    this.guestList.forEach((guest) => {
      console.log(guest + " day la " + this.name);
    });
  },
};

event.printGuestList();
