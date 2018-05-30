
export function loginToSpotify(code, history) {
  return (dispatch) => {
    return fetch('http://localhost:3000/api/v1/dashboard', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ code })
    })
    .then(res => res.json())
    .then( user => {
      localStorage.setItem("jwt", user.code)
         localStorage.setItem("job_id", user.job_id)
            dispatch({ type: 'LOGIN_USER', payload: user.currentUser })
    })
  }
}

export function logOutOfSpotify() {
  return dispatch => {
    localStorage.clear()
    return {}
  }
}

export function getUser(jwt) {
  return (dispatch) => {
    return fetch('http://localhost:3000/api/v1/get_user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Token ${localStorage.getItem('jwt')}`
      },
      body: JSON.stringify({ jwt })
    })
    .then(res => res.json())
    .then(user => {
      dispatch({ type: 'GET_USER', payload: user.currentUser})
    })
  }
}

export function getUserData(jwt) {
  console.log("in getUserData");
  return (dispatch) => {
    return fetch('http://localhost:3000/api/v1/events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Token ${localStorage.getItem('jwt')}`
      },
      body: JSON.stringify({ jwt })
    })
    .then(res => res.json())
    .then( json => {
      dispatch({ type: 'FETCH_EVENTS', payload: json.events })
    })
  }
}

export function addVenueToFavorites(jwt, user_venue) {
  return (dispatch) => {
    return fetch('http://localhost:3000/api/v1/favorite_venues', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Token ${localStorage.getItem('jwt')}`
      },
      body: JSON.stringify({ jwt, user_venue })
    })
    .then(res => res.json())
    .then(userWithVenues => {
      dispatch({ type: 'FETCH_FAVORATE_VENUES', payload: userWithVenues})
    })
  }
}

export function deleteVenueFromFavorites(jwt, user_venue) {
  return (dispatch) => {
    return fetch('http://localhost:3000/api/v1/favorite_venues/' + user_venue.id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Token ${localStorage.getItem('jwt')}`
      },
      body: JSON.stringify({ jwt })
    })
    .then(res => res.json())
    .then(userWithVenues => {
      dispatch({ type: 'FETCH_FAVORATE_VENUES', payload: userWithVenues})
    })
  }
}

// export function getUserVenueFavorites(jwt) {
//   return (dispatch) => {
//     return fetch('http://localhost:3000/api/v1/get_favorite_venues', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json',
//         'Authorization': `Token ${localStorage.getItem('jwt')}`
//       },
//       body: JSON.stringify({ jwt })
//     })
//     .then(res => res.json())
//     .then(favUserVenues => {
//       dispatch({ type: 'FETCH_FAVORATE_VENUES', payload: favUserVenues})
//     })
//   }
// }

// export function jobStatus(jwt, id) {
//   return (dispatch) => {
//     return fetch('http://localhost:3000/api/v1/background_jobs/3' , {
//       method: 'SHOW',
//       headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json',
//         'Authorization': `Token ${localStorage.getItem('jwt')}`
//       }
//     })
//     .then(res => res.json())
    // .then( user => {
    //   localStorage.setItem("jwt", user.code)
    //      localStorage.setItem("job_id", user.job_id)
    //         dispatch({ type: 'LOGIN_USER', payload: user.currentUser })
    // })
  // }
// }

export function toggleLoading() {
  return (dispatch) => {
    dispatch({ type: 'TOGGLE_EVENTS_LOADER' })
  }
}

export function userSearch(searchTerm) {
  return { type: 'SEARCH_INPUT', payload: searchTerm }
}

export function jobStatus(token, job_id) {
  console.log("in the jobStatus action");
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/background_jobs/${job_id}` , {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    .then(res => res.json())
    .then(json => {
      dispatch({ type: 'BACKGROUND_JOB_STATUS', payload: json.status})
    })
  }
}
