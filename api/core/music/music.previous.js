var sendCommand = require('./music.sendCommand.js');

/**
 * @public
 * @name gladys.music.previous
 * @description You can put the devicetype attribute OR the room attribute to determine in which room you want to control the music/which precise deviceType is playing.
 * @param {Object} params
 * @param {Array} params.deviceTypes The id of the deviceType
 * @param {Array} params.rooms The id of the room
 * @example
 * var params = {
 *      devicetype : 1 // or room
 * }
 * 
 * gladys.music.previous(params)
 */

module.exports = function previous(params) {
    return sendCommand('previous', params);
};