import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
  data: [],
  data3:[],
  data2: [],
  incre: Array(100).fill(1),
  totalprice: 0,
  nettotal:0,
  prisingle: [],
  allprice:[],
  disc:[],
  pricedisc:[],
  netprice:[],
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    cartdata: (state, action) => {
      state.data = [...state.data,action.payload.element]
      action.payload.element.i+=1;
      
      state.allprice = [...state.allprice, action.payload.price]
      state.prisingle = [...state.prisingle, action.payload.price]
      state.disc = [...state.disc, action.payload.disc]

      let i=(action.payload.price-(((action.payload.disc* action.payload.price)/100)));
      state.pricedisc=[...state.pricedisc,i]
      state.netprice=[...state.netprice,i]
      console.log(state.netprice);

      state.totalprice += action.payload.price;
      state.nettotal += i;
     
      console.log( state.disc);
      console.log( state.pricedisc);
     

      console.log(state.price);
      console.log(state.allprice);


    },
    
    cartsingle: (state, action) => {
      state.data = [...state.data, action.payload.data]

      state.prisingle = [...state.prisingle, action.payload.price]
      state.allprice = [...state.allprice, action.payload.price]

      let i=(action.payload.price-(((action.payload.disc* action.payload.price)/100)));
      state.netprice=[...state.netprice,i]
      state.pricedisc=[...state.pricedisc,i]

      // state.netprice=[...state.netprice,i]
      console.log(state.netprice);

      state.totalprice += action.payload.price;
      state.nettotal += i;

      console.log(state.data);
      
      console.log(action.payload.data);

    

    },
    removecart: (state, action) => {
      console.log(state.data);
      state.totalprice=state.totalprice-state.allprice[action.payload.ind];
      state.nettotal=state.nettotal-state.netprice[action.payload.ind];

      state.data = state.data.filter((ele, ind) => {
        return ind !== action.payload.ind;
      })
      state.prisingle = state.prisingle.filter((ele, ind) => {
        return ind !== action.payload.ind;
      })
      state.incre = state.incre.filter((ele, ind) => {
        return ind !== action.payload.ind;
      })
      state.allprice = state.allprice.filter((ele, ind) => {
        return ind !== action.payload.ind;
      })
      state.pricedisc = state.pricedisc.filter((ele, ind) => {
        return ind !== action.payload.ind;
      })
      state.netprice = state.netprice.filter((ele, ind) => {
        return ind !== action.payload.ind;
      })
      console.log(state.data);
      console.log(action.payload.price);

    },
    increment: (state, action) => {
      // console.log(state.data.length);
      console.log(action.payload);
      console.log([state.data[action.payload.ind]]);
      // console.log(action.payload.price);
      state.allprice[action.payload.ind]+=state.data[action.payload.ind].price;
      state.netprice[action.payload.ind]+=state.pricedisc[action.payload.ind];
      state.incre[action.payload.ind] += 1;
      // console.log(state.incre[action.payload.ind]);
      // console.log(state.allprice[action.payload.ind]);

      state.totalprice += state.prisingle[action.payload.ind];

      let i=(action.payload.price-(((action.payload.disc* action.payload.price)/100)));
      state.nettotal+=state.netprice[action.payload.ind]


      //   }
      // }
    },
    decrement: (state, action) => {
      console.log(state.data.length);
      console.log(action.payload.price);


      state.incre[action.payload.ind] -= 1;
      state.allprice[action.payload.ind]-=state.data[action.payload.ind].price;
      state.netprice[action.payload.ind]-=state.pricedisc[action.payload.ind];


      console.log(state.incre[action.payload.ind]);
      state.totalprice -= state.prisingle[action.payload.ind];
      state.nettotal -= state.netprice[action.payload.ind];

      let i=(action.payload.price-(((action.payload.disc* action.payload.price)/100)));
      state.nettotal -= i;


    },
  },
})

// Action creators are generated for each case reducer function
export const { cartdata, removecart, cartsingle, increment, decrement,cartdata3 } = counterSlice.actions

export default counterSlice.reducer