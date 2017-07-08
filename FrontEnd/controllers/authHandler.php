 <?php 
	require '../connection.php';
 	mysql_select_db('tour and travel');
 	session_start();

 //********** register Handler **********

 if(isset($_POST['register']))
 {
 	
 	$username=$_POST['username'];
 	$email=$_POST['email'];
 	$password=$_POST['password'];
 	$password2=$_POST['password2'];
 	$mobile=$_POST['mobile'];

 	if($password==$password2)
 	{
 		date_default_timezone_set('Asia/Kolkata');
 		$action_date=date('d/m/y h:i:sa');
 		
 		$pass=md5($password);
 		$sql="INSERT INTO `users`(`username`, `email`, `mobile`, `password`,`create_at`,`avatar`) VALUES ('$username','$email','$mobile','$pass','$action_date','default.png')";
 		$retval=mysql_query($sql);
 		if(!$retval)
 		{
 			die("Database Error".mysql_error());
 		}
 		else
 		{
 			$sql_id="select * from `users` where email='$email'";
 			if(!mysql_query($sql_id))
 				die("Database error1");
 			$val=mysql_fetch_assoc(mysql_query($sql_id));
 			$_SESSION['user_id']=$val['id'];
 			$_SESSION['user_type']="customer";			
 			echo $val['id'];
 		   header('Location: ../index.php');
 		}
 	}
 	else
 	{
 		echo "Password did not match";
 	}
 }


//********** login Handler **********

	 else if(isset($_POST['login'])){
	 	$email=$_POST['email'];
	 	$password=$_POST['password'];
	 	$pass=md5($password);
	 	$sql="SELECT * FROM `users` WHERE email='$email'";
	 	if(!mysql_query($sql))
	 	{
	 		echo "not";
	 		header('Location : ../index.php?LoggedIn=Error');
	 	}
	 	else
	 	{
	 		$val=mysql_fetch_assoc(mysql_query($sql));
	 		if(!$val)
	 			{
	 				echo "no value";
	 				header('Location: ../index.php?LoggedIn=False&Error=email');
	 			}
	 		else
	 		{
	 			if($email==$val['email'])
	 			{
	 				if($pass==$val['password'])
	 				{
	 					$_SESSION['user_id']=$val['id'];	
	 					$_SESSION['user_type']="customer";			
	 					header('Location: ../index.php?LoggedIn=True');
	 				}
		 			else
		 			{
		 				header('Location: ../index.php?LoggedIn=False');
		 			}

	 			}
	 		}	
	 	}
	 }

//********** Admin login Handler **********

	 else if(isset($_POST['admin_login'])){
	 	$username=$_POST['username'];
	 	$password=$_POST['password'];	 
	 	$pass=$password;
	 	$sql="SELECT * FROM `agent` WHERE username='$username'";
	 	if(!mysql_query($sql))
	 	{
	 		header('Location : ../index.php?LoggedIn=Error');
	 	}
	 	else
	 	{
	 		$val=mysql_fetch_assoc(mysql_query($sql));
	 		if(!$val)
	 			{
	 				echo "no value";
	 				header('Location: ../index.php?LoggedIn=False&Error=username');
	 			}
	 		else
	 		{
	 			if($username==$val['username'])
	 			{
	 				if($pass==$val['password'])
	 				{
	 					$_SESSION['user_id']=$val['id'];
	 					$_SESSION['user_type']="admin";		
	 					header('Location: ../index.php?LoggedIn=True');
	 				}
		 			else
		 			{
		 				header('Location: ../index.php?LoggedIn=False');
		 			}
	 			}
	 		}	
	 	}
	 }


 ?>