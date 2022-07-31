let calculate_days_in_week = (input) => {
    let days_in_week = 7;
    let weeks = input / days_in_week;
    if (input % 1 != 0) {
      console.log("fadlan tira aan jajab lehen gali"); // kaliya waaxa la ogolyahay tiro aan jajab leehen
    } else if (input % weeks == 0) {
      console.log(weeks + " weeks");
    } else if (input < days_in_week) {
      console.log("0 weeks and " + input + " days"); // hadii input uu ka ween yahay tirada maalmaha isbuuca si automatic ah inputka wuxuu la mid yahay dayska iyo 0 weeks
    } else {
      let week = Math.floor(weeks); // jajab dhan ka reeb
      let numbers_to_be_substracted = week * days_in_week;
      let output = input - numbers_to_be_substracted;
      console.log(week + "weeks  and " + output + " days");
    }
  };
  
  calculate_days_in_week(120);
  