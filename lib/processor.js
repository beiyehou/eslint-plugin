/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 */
'use strict'

module.exports = {
  preprocess (code) {
    return [code]
  },

  postprocess (messages) {
    // Filter messages which are in disabled area.
    console.log("postprocess messages:", messages);
    return messages[0];
  },

  supportsAutofix: true
}
