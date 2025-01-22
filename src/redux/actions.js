import axios from "axios";
import Swal from "sweetalert2";

export const BUY_PRODUCT = "BUY_PRODUCT";
export const COMMIT = "COMMIT";
export const STATUS = "STATUS";
export const REFUND = "REFUND";
export const SET_CLUBS = "SET_CLUBS";
export const SET_CLUB_BY_ID = "SET_CLUB_BY_ID";
export const SET_BARTENDERS = "SET_BARTENDERS";
export const SET_BARTENDER_BY_ID = "SET_BARTENDER_BY_ID";
export const SET_PRODUCTS = "SET_PRODUCTS";
export const SET_CATEGORIES = "SET_CATEGORIES";
export const SET_EVENTS = "SET_EVENTS";
export const SET_ALL_EVENTS = "SET_ALL_EVENTS";
export const SET_ORDERS = "SET_ORDERS";

export function registroUsuario(payload) {
  return async function (dispatch) {
    try {
      const response = await axios.post('/users/create', payload);
      console.log(response);
      if (response.status === 200 && response.data && !response.data.error) {
        const {token, usuario} = response.data;
        localStorage.setItem('tokenUser', JSON.stringify(token));
        Swal.fire({
          title: "Usuario Registrado",
          icon: 'success',
          confirmButtonText: 'OK',
          background: '#242424',
          color: 'white',
          backdrop: 'rgba(0,0,000,0.4)',
        });
      } else {
        Swal.fire({
          title: error.response.data.message,
          icon: 'error',
          confirmButtonText: 'OK',
          background: '#242424',
          color: 'white',
          backdrop: 'rgba(0,0,000,0.4)',
        });
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: error.response?.data?.error,
        icon: 'error',
        confirmButtonText: 'OK',
        background: '#242424',
        color: 'white',
        backdrop: 'rgba(0,0,000,0.4)',
      });
      
    }
  };
}

   
export function loginUsuario(payload) {
  return async function (dispatch) {
    try {
      const response = await axios.post('/users/login', payload);

      if (response.status === 200) {
        const usuario = response.data.usuario;

        if (usuario) {
          localStorage.setItem('user', JSON.stringify(response.data.usuario));

          return usuario;
        } else {
          // Lanza un error si el usuario no existe
          throw new Error("El usuario no está registrado");
        }
      } else {
        throw new Error(response.data.error);
      }
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  };
}


// Transbank


export function buyProducts(payload) {
  return async function (dispatch) {
    const result = await axios.post("transbank/create", payload);
    return dispatch({
      type: BUY_PRODUCT,
      payload: result.data,
    });
  };
}

export function commitWeb(payload) {
  return async function (dispatch) {
    var result = await axios.post( "transbank/commit-web" , payload);
    console.log(result.data);
    return dispatch({
      type: COMMIT,
      payload: result.data,
    });
  };
}
export function commitMobile(payload) {
  return async function (dispatch) {
    var result = await axios.post( '/transbank/commit' , payload);
    return dispatch({
      type: COMMIT,
      payload: result.data,
    });
  };
}

export function status(payload) {
  return async function (dispatch) {
    var result = await axios.post( "transbank/status", payload );
    return dispatch({
      type: STATUS,
      payload: result.data,
    });
  };
}

// Clubs
// Acción para crear un Club
export const createClub = (clubData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('/club/create', clubData);
      console.log(response.data); 
      Swal.fire({
        title: "Club Agregado!",
        icon: 'success',
        confirmButtonText: 'OK',
        background: '#242424',
        color: 'white',
        backdrop: 'rgba(0,0,000,0.4)',
      });

    } catch (error) {
      console.error('Error creating club:', error); 
      Swal.fire({
        title: error.response.data.message,
        icon: 'error',
        confirmButtonText: 'OK',
        background: '#242424',
        color: 'white',
        backdrop: 'rgba(0,0,000,0.4)',
      });
    }
  };
};

// Acción para obtener todos los clubs
export const getAllClubs = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('/club/all');
      return dispatch({
        type: SET_CLUBS,
        payload: response.data,
      });
    } catch (error) {
      console.error('Error getting all clubs:', error); 
    }
  };
};

// Acción para obtener un club por ID
export const getClubById = (clubId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/club/one/${clubId}`);
      return dispatch({
        type: SET_CLUB_BY_ID,
        payload: response.data,
      });
    } catch (error) {
      console.error(`Error getting club ${clubId}:`, error); 
    }
  };
};

// Acción para actualizar un club por ID
export const updateClub = (clubId, clubData) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`/club/${clubId}`, clubData);
      console.log(response.data);
    } catch (error) {
      console.error(`Error updating club ${clubId}:`, error); 
    }
  };
};

// Acción para eliminar un club por ID
export const deleteClub = (clubId) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(`/club/${clubId}`);
      console.log(response.data); 
      Swal.fire({
        title: "Club Eliminado!",
        icon: 'succes',
        confirmButtonText: 'OK',
        background: '#242424',
        color: 'white',
        backdrop: 'rgba(0,0,000,0.4)',
      });
    } catch (error) {
      console.error(`Error deleting club ${clubId}:`, error); 
      Swal.fire({
        title: "Ocurrió un Error",
        icon: 'error',
        confirmButtonText: 'OK',
        background: '#242424',
        color: 'white',
        backdrop: 'rgba(0,0,000,0.4)',
      });
    }
  };
};

// Bartenders
// Acción para crear un bartender
export const createBartender = (bartenderData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('/bartender', bartenderData);
      console.log(response.data); 
      Swal.fire({
        title: "Bartender Creado!",
        icon: 'succes',
        confirmButtonText: 'OK',
        background: '#242424',
        color: 'white',
        backdrop: 'rgba(0,0,000,0.4)',
      });

    } catch (error) {
      console.error('Error creating bartender:', error); 
      Swal.fire({
        title: error.response.data.message,
        icon: 'error',
        confirmButtonText: 'OK',
        background: '#242424',
        color: 'white',
        backdrop: 'rgba(0,0,000,0.4)',
      });
    }
  };
};

// Acción para obtener todos los bartenders
export const getAllBartenders = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('/bartender');
      return dispatch({
        type: SET_BARTENDERS,
        payload: response.data,
      });
    } catch (error) {
      console.error('Error getting all bartenders:', error); 
    }
  };
};

// Acción para obtener un bartender por ID
export const getBartenderById = (bartenderId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/bartender/${bartenderId}`);
      return dispatch({
        type: SET_BARTENDER_BY_ID,
        payload: response.data,
      });
    } catch (error) {
      console.error(`Error getting bartender ${bartenderId}:`, error); 
    }
  };
};

// Acción para actualizar un bartender por ID
export const updateBartender = (bartenderId, bartenderData) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`/bartender/${bartenderId}`, bartenderData);
      console.log(response.data);
    } catch (error) {
      console.error(`Error updating bartender ${bartenderId}:`, error); 
    }
  };
};

// Acción para eliminar un bartender por ID
export const deleteBartender = (bartenderId) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(`/bartender/${bartenderId}`);
      console.log(response.data); 
      Swal.fire({
        title: "Bartender Eliminado!",
        icon: 'succes',
        confirmButtonText: 'OK',
        background: '#242424',
        color: 'white',
        backdrop: 'rgba(0,0,000,0.4)',
      });
    } catch (error) {
      console.error(`Error deleting bartender ${bartenderId}:`, error); 
      Swal.fire({
        title: "Ocurrió un Error",
        icon: 'error',
        confirmButtonText: 'OK',
        background: '#242424',
        color: 'white',
        backdrop: 'rgba(0,0,000,0.4)',
      });
    }
  };
};


// PRODUCTS

export const createProducts = (productData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('/products/create', productData);
      console.log(response.data); 
      Swal.fire({
        title: "Producto Creado!",
        icon: 'succes',
        confirmButtonText: 'OK',
        background: '#242424',
        color: 'white',
        backdrop: 'rgba(0,0,000,0.4)',
      });

    } catch (error) {
      console.error('Error creating product:', error); 
      Swal.fire({
        title: error.response.data.message,
        icon: 'error',
        confirmButtonText: 'OK',
        background: '#242424',
        color: 'white',
        backdrop: 'rgba(0,0,000,0.4)',
      });
    }
  };
};

export const getAllProducts = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('/products');
      console.log(response.data);
      return dispatch({
        type: SET_PRODUCTS,
        payload: response.data,
      });
    } catch (error) {
      console.error('Error getting all products:', error); 
    }
  };
};

export const updateProduct = (productId, productData) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`/products/${productId}`, productData);
      console.log(response.data);
    } catch (error) {
      console.error(`Error updating product ${productId}:`, error); 
    }
  };
};

export const deleteProducts = (productId) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(`/products/${productId}`);
      console.log(response.data); 
      Swal.fire({
        title: "Producto Eliminado!",
        icon: 'succes',
        confirmButtonText: 'OK',
        background: '#242424',
        color: 'white',
        backdrop: 'rgba(0,0,000,0.4)',
      });
    } catch (error) {
      console.error(`Error deleting product ${productId}:`, error); 
      Swal.fire({
        title: "Ocurrió un Error",
        icon: 'error',
        confirmButtonText: 'OK',
        background: '#242424',
        color: 'white',
        backdrop: 'rgba(0,0,000,0.4)',
      });
    }
  };
};


export const createCategory = (newCategory) => {
  return async (dispatch) => {
  try {
    const response = await axios.post('/categories', newCategory);
    console.log(response.data);
    Swal.fire({
      title: "Nueva Categoría Creada!",
      icon: 'succes',
      confirmButtonText: 'OK',
      background: '#242424',
      color: 'white',
      backdrop: 'rgba(0,0,000,0.4)',
    });
  } catch (error) {
    console.error('Error creating category:', error.response?.data || error.message);
    Swal.fire({
      title: error.response.data.message,
      icon: 'error',
      confirmButtonText: 'OK',
      background: '#242424',
      color: 'white',
      backdrop: 'rgba(0,0,000,0.4)',
    });
  }
};
}

export const getAllCategories = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('/categories');
      console.log(response.data);
      return dispatch({
        type: SET_CATEGORIES,
        payload: response.data.categories,
      });
    } catch (error) {
      console.error('Error getting all categories:', error); 
    }
  };
};

// Events

export const createEvent = (eventData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('/events/create', eventData);
      console.log(response.data); 
      Swal.fire({
        title: "Evento Creado!",
        icon: 'succes',
        confirmButtonText: 'OK',
        background: '#242424',
        color: 'white',
        backdrop: 'rgba(0,0,000,0.4)',
      });

    } catch (error) {
      console.error('Error creating event:', error); 
      Swal.fire({
        title: error.response.data.message,
        icon: 'error',
        confirmButtonText: 'OK',
        background: '#242424',
        color: 'white',
        backdrop: 'rgba(0,0,000,0.4)',
      });
    }
  };
};

export const getAllEvents = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('/events');
      console.log(response.data);
      return dispatch({
        type: SET_ALL_EVENTS,
        payload: response.data,
      });
    } catch (error) {
      console.error('Error getting all events:', error); 
    }
  };
};

export const getEventsByClub = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/events/club/${id}`);
      console.log(response.data);
      return dispatch({
        type: SET_EVENTS,
        payload: response.data,
      });
    } catch (error) {
      console.error('Error getting all events:', error); 
    }
  };
};

export const updateEvent = (eventId, eventData) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`/events/${eventId}`, eventData);
      console.log(response.data);
    } catch (error) {
      console.error(`Error updating event ${eventId}:`, error); 
    }
  };
};

export const deleteEvents = (eventId) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(`/events/${eventId}`);
      console.log(response.data); 
      Swal.fire({
        title: "Evento Eliminado!",
        icon: 'succes',
        confirmButtonText: 'OK',
        background: '#242424',
        color: 'white',
        backdrop: 'rgba(0,0,000,0.4)',
      });
    } catch (error) {
      console.error(`Error deleting event ${eventId}:`, error); 
      Swal.fire({
        title: "Ocurrió un Error",
        icon: 'error',
        confirmButtonText: 'OK',
        background: '#242424',
        color: 'white',
        backdrop: 'rgba(0,0,000,0.4)',
      });
    }
  };
};

// SALES

// Products
export const getAllOrders = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('/order');
      return dispatch({
        type: SET_ORDERS,
        payload: response.data,
      });
    } catch (error) {
      console.error('Error getting all events:', error); 
    }
  };
};
