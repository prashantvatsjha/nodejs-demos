/* DB connection */

var mysql=require('mysql');

var con=mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"prashant",
	database:"mydb"	
});


con.connect(function(err){
	if(err){
		throw err;
	}else{
		console.log('connected!')			
//		insertRecords(con);
		selectRecords(con);		
	}
	
})


function selectRecords(con){
	
	var sql="select * from customers"
	con.query(sql,function(err, result,fields){		
		if(err) throw err;		
		console.log(result);		
	});
	
}

function insertRecords(con){
	
	for(i=0;i<10;i++){
		var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc-"+i+"', 'Highway -"+i+"')";	
		con.query(sql,function(err,result){
			if(err) throw err;
			console.log('Inserted record for - '+i);
		});
	}
	
}





