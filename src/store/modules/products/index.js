import getters from "./getters.js";
export default {
  namespaced: true,
  state() {
    return {
      products: [
        {
          id: "c01",
          name: 'car',
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-u_frjVFZAsyrTTDm4vEKYQ0rMgRIXNnhzw&usqp=CAU",
          salary: 100,
          rate: 30,        
        },
        {
            id: "c02",
            name: 'car',
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-u_frjVFZAsyrTTDm4vEKYQ0rMgRIXNnhzw&usqp=CAU",
            salary: 100,
            rate: 30,        
          },
        {
            id: "c03",
            name: 'car',
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-u_frjVFZAsyrTTDm4vEKYQ0rMgRIXNnhzw&usqp=CAU",
            salary: 100,
            rate: 30,        
          },
        {
          id: "c04",
          name: 'phone',
          image: "https://thumbs.dreamstime.com/b/watercolor-bubbles-seamless-pattern-abstract-background-circles-small-random-dots-hand-drawn-200725733.jpg",
          salary: 100,
          rate: 30,
        },
        {
          id: "c05",
          name: "clothes",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-u_frjVFZAsyrTTDm4vEKYQ0rMgRIXNnhzw&usqp=CAU",
          salary: 100,
          rate: 30,
        },
        {
          id: "c06",
          name: 'Food',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkz0l8sCMUbFUC955E1O0LyPv7U7Z-f7ihKw&usqp=CAU',
          salary: 100,
          rate: 30,
        },
        {
            id: "c07",
            name: 'Food',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkz0l8sCMUbFUC955E1O0LyPv7U7Z-f7ihKw&usqp=CAU',
            salary: 100,
            rate: 30,
          },
          {
            id: "c08",
            name: 'Food',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkz0l8sCMUbFUC955E1O0LyPv7U7Z-f7ihKw&usqp=CAU',
            salary: 100,
            rate: 30,
          },
          {
            id: "c09",
            name: 'Food',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkz0l8sCMUbFUC955E1O0LyPv7U7Z-f7ihKw&usqp=CAU',
            salary: 100,
            rate: 30,
          },
          {
            id: "c10",
            name: 'Food',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkz0l8sCMUbFUC955E1O0LyPv7U7Z-f7ihKw&usqp=CAU',
            salary: 100,
            rate: 30,
          },
          {
            id: "c11",
            name: 'Food',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkz0l8sCMUbFUC955E1O0LyPv7U7Z-f7ihKw&usqp=CAU',
            salary: 100,
            rate: 30,
          },
          {
            id: "c12",
            name: 'Food',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkz0l8sCMUbFUC955E1O0LyPv7U7Z-f7ihKw&usqp=CAU',
            salary: 100,
            rate: 30,
          },
      ],
    };
  },
  getters,
};
