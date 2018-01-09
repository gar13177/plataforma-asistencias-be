/**
 * Actividad.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        id: {
            type: 'integer',
            autoIncrement: true,
            primaryKey: true
        },
        idUnidad: {
            type: 'integer'
        },
        nombre: {
            type: 'text'
        },
        idTipoActividad: {
            type: 'integer'
        },
        descripcion: {
            type: 'longtext'
        },
        objetivos: {
            type: 'longtext'
        },
        resultadosEsperados: {
            type: 'longtext'
        },
        fecha: {
            type: 'date'
        },
        duracion: {
            type: 'integer'
        },
        lugar: {
            type: 'string'
        },
        evaluacion: {
            type: 'boolean'
        },
        observaciones: {
            type: 'longtext'
        }
    }
};

