export const environment = {
    production: false,
    firebaseConfig : {
        apiKey: "AIzaSyDikkSNhCmejNqPaNI17IyTurNd12YFm3o",
        authDomain: "recetario-a28a8.firebaseapp.com",
        projectId: "recetario-a28a8",
        storageBucket: "recetario-a28a8.appspot.com",
        messagingSenderId: "1098789838097",
        appId: "1:1098789838097:web:2e31772a79137e435d40b0",
        measurementId: "G-VG7EWL8ZNM"
      },
    api:{
        nationalities:'www.themealdb.com/api/json/v1/1/list.php?a=list',
        categories:'www.themealdb.com/api/json/v1/1/list.php?c=list',
        listByCategory: 'www.themealdb.com/api/json/v1/1/filter.php?c=',
        listByNationality: 'www.themealdb.com/api/json/v1/1/filter.php?a=',
        viewRecipe:'www.themealdb.com/api/json/v1/1/lookup.php?i='
    }
    
};
