Convert the  [entity relationship model](https://imgur.com/oHkrfiJ) to a relational diagram

Hotel (<b><u>Hotel_id</b></u>, Hotel_name, #Type_id)

Type (<b><u>Type_id</b></u>, Type_Name)

Room (<b><u>Room_id</b></u>, Floor, #Hotel_id, #Category_id)

Category (<b><u>Category_id</b></u>, Category_Name, Price, Beds_numbers)

Employee (<b><u>Employee_id</b></u>, Employee_Name, Employee_Speciality, #Hotel_id, #Manager_id)