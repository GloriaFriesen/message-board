import Ember from 'ember';

export default Ember.Component.extend({
  addQuestion: false,
  actions: {
    showQuestionForm() {
      this.set('addQuestion', true);
    },
    saveQuestion() {
      var params = {
        author: this.get('author'),
        query: this.get('query'),
        note: this.get('note')
      };
      this.set('addQuestion', false);
      this.set('author', '');
      this.set('query', '');
      this.set('note', '');
      this.sendAction('saveQuestion', params);
    },
    cancel() {
      this.set('addQuestion', false);
      this.set('author', '');
      this.set('query', '');
      this.set('note', '');
    }
  }
});
