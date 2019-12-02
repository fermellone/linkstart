<?php include 'includes/other_header.php'; ?>



<div class="container">
    <h6 class="h1 pt-4">Metas</h6>
    <p>
        Nuestro proyecto lo queremos desarrollar sin ánimos de lucro. Con el objetivo de que las personas puedan obtener 
        experiencia práctica y laboral a medida que avanzan en sus estudios, buscamos que sus bolsillos sean afectados en la menor magnitud posible. 
        Por lo que abrimos paso a donaciones de cualquier tipo, siempre que no sea buscando una compensación de tipo político.
        Lo único que podemos ofrecer a cambio por el momento es demostrar nuestra más sincera gratitud por este medio, y 
        documentar públicamente cada gasto, por mínimo que sea.
    </p>
</div>
<hr>
<div class="container">
    <h2>Plan Piloto: <a class="btn btn-linkstart ml-4" href="">Donar</a></h2>
    <table class="table table-bordered">
        <thead>
            <tr>
                <tr>
                    <th>Objetivo</th>
                    <th>Detalles</th>
                    <th>Aporte</th>
                    <th>Monto</th>
                    <th>Fecha Límite</th>
                </tr>
            </tr>
        </thead>
        <?php include './includes/tabla_piloto.php' ?>
    </table>
</div>

<?php include 'includes/footer.php'; ?>