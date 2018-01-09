/**
 * ActividadController
 *
 * @description :: Server-side logic for managing asistencias
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    list: function (req, res) {
        Actividad.find({}).exec(function (err, actividades) {
            if (err) {
                res.send(500, { error: 'Database Error' });
            }
            res.view('actividad/list', { actividades: actividades });
        })
    },
    add: function (req, res) {
        res.view('actividad/add');
    },
    create: function (req, res) {
        var nombre = req.body.nombre;
        var descripcion = req.body.descripcion;
        var objetivos = req.body.objetivos;
        var resultados = req.body.resultados;
        var fecha = req.body.fecha;
        var duracion = req.body.duracion;
        var lugar = req.body.lugar;
        var observaciones = req.body.observaciones;

        Actividad.create({
            nombre:nombre,
            descripcion:descripcion,
            objetivos:objetivos,
            resultados:resultados,
            fecha:fecha,
            duracion:duracion,
            lugar:lugar,
            observaciones:observaciones
        }).exec(
            function(err){
                if (err){
                    res.send(500, {error:'Database error'});
                }

                res.redirect('/actividad/list');
            }
        )
    }
};

