<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Policy</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</head>

<body>
    <main class="m-3">
        <form class="container d-grid border p-3 gap-3 col-xl-6" method="post" action="data.php">
            <div>
                <label for="nombreEmpresa" class="form-label">Nombre de la Empresa</label>
                <input type="text" class="form-control" id="nombreEmpresa" required>            
            </div>
            <div>
                <label for="correoElectronico" class="form-label">Correo electronico</label>
                <input type="email" class="form-control" id="correoElectronico" required>            
            </div>
            <div>
                <label for="lugarEmpresa" class="form-label">Lugar de la empresa:</label>
                <input type="text" class="form-control" id="exampleInputEmail1" required>            
            </div>
            <div>
                <label for="numeroTelefono" class="form-label">Número de telefono de la empresa</label>
                <input type="tel" class="form-control" id="numeroTelefono" required>            
            </div>
            <div>
                <label for="cifEmpresa" class="form-label">CIF o DNI de la empresa</label>
                <input type="number" class="form-control" id="cifEmpresa" required>            
            </div>
            <div>
                <label for="urlSite" class="form-label">Url del sitio</label>
                <input type="url" class="form-control" id="urlSite" required>            
            </div>
            <button type="submit" class="btn btn-dark">Enviar</button>
        </form>
    </main>



</body>

</html>