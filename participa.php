<?php include 'includes/other_header.php' ?>

<div class="container my-4 py-3">
  <h3 class="h1 col-md-6 my-4">Mandanos tus datos y contactamos contigo para reservar tu lugar</h3>
  <form-group class="">
    <div class="form-group col-md-6 mt-4">
      <input type="text" class="form-control" placeholder="Nombre">
    </div>
    <div class="form-group col-md-6">
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
    </div>
    <div class="form-group col-md-6 mb-4">
      <input type="text" class="form-control" placeholder="Numero de celular">
    </div>
    <div class="form-check col-md-6 ml-3 mt-4">
      <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
      <label class="form-check-label" for="gridRadios1">
        Quiero más información
      </label>
    </div>
    <div class="form-check col-md-6 ml-3 mb-4">
      <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
      <label class="form-check-label" for="gridRadios1">
        Quiero participar
      </label>
    </div>
    <button class="btn btn-linkstart ml-3 mt-4" type="submit">Enviar</button>
  </form-group>
</div>

<?php include 'includes/footer.php' ?>