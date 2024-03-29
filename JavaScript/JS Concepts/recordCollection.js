// freecodecamp javascript -> record collection question

let recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  function getValues(recordCollection, id, prop) {
    console.log(recordCollection[id][prop]); //prop -> property

  }
  
  getValues(recordCollection, 5439, "albumTitle"); // it is giving the albumtitle of 5439
  getValues(recordCollection,2468, "tracks");      // it is giving the tracks of the 2468