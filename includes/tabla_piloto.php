<?php 

$conn = mysqli_connect('localhost', 'nandy','asd123','linkstart_db');

if ($conn -> connect_error) {
    die("Connection failed: ". $conn-> connect_error);
}

$sql = "SELECT nombre, descripcion, tipo, monto, fecha_limite FROM objetivos WHERE proyecto = 'Plan Piloto'";

$result = $conn->query($sql);

$total_piloto = 0;

if ($result-> num_rows > 0) {
    echo "<tbody>";
    while($row = $result-> fetch_assoc()) {
        echo "<tr><td>". $row['nombre']. "</td><td>". $row['descripcion'] ."</td><td>". $row['tipo'] ."</td><td>". $row['monto']['-1'], $row['monto']['-2'], $row['monto']['-3']. "</td><td>". $row['fecha_limite'] ."</td></tr>";
        $total_piloto = $total_piloto + $row['monto'];
    }
    echo "<tr><td>Total:</td><td>-</td><td>-</td><td>$total_piloto</td><td>-</td></tr>";
    echo "</tbody>";
}
else {
    echo "0 results";
}
$conn->close();
//Objetivos

//   id_objetivo : 0
//   nombre: 1
//   descripcion: 2
//   tipo: 3
//   monto: 4
//   fecha_limite: 5
//   proyecto: 6


?>