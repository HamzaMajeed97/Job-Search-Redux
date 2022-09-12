export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITE";

export const GET_JOB_LIST = "GET_JOB_LIST";
export const GET_COMPANY_SEARCH = "GET_COMPANY_SEARCH";

export const addToFavouritesAction = (data) => {
  return {
    type: ADD_TO_FAVOURITES,
    payload: data.company_name,
  };
};

export const removeFromFavouritesAction = (data) => {
  return {
    type: REMOVE_FROM_FAVOURITES,
    payload: data.company_name,
  };
};

// export const getJobList = () => {
//   const baseEndpoint = "https://strive-jobs-api.herokuapp.com/jobs?search=";
//   let query = "";

//   return async (dispatch) => {
//     try {
//       const response = await fetch(baseEndpoint + query + "&limit=20");
//       if (response.ok) {
//         const { result } = await response.json();
//         console.log(result);
//         dispatch({
//           type: GET_JOB_LIST,
//           payload: result,
//         });
//       } else {
//         alert("Error fetching results");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

// export const getCompanySearch = () => {
//   const baseEndpoint = "https://strive-jobs-api.herokuapp.com/jobs?company=";

//   return async (dispatch) => {
//     try {
//       const response = await fetch(baseEndpoint );
//       if (response.ok) {
//         const { data } = await response.json();
//         dispatch({
//           type: GET_COMPANY_SEARCH,
//           payload: data,
//         });
//         console.log("company search", data);
//       } else {
//         alert("Error fetching results");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };
