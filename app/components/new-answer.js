import Ember from 'ember';

export default Ember.Component.extend({
  addAnswer: false,
  actions: {
    answerForm() {
      this.set('addAnswer', true);
    },
    saveAnswer() {
      var params = {
        author: this.get('author'),
        content: this.get('content'),
        question: this.get('question')
      };
      this.set('addAnswer', false);
      this.sendAction('saveAnswer', params);
    },
    cancel() {
      this.set('addAnswer', false);
      this.set('author', '');
      this.set('content', '');
    }
  }

});
