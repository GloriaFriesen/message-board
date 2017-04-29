import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestion: false,
  actions: {
    delete(question) {
      if (confirm('Are you sure you want to delete this question?')) {
        this.sendAction('destroyQuestion', question);
      }
    },
    updateQuestion() {
      this.set('updateQuestion', true);
    },
    update(question) {
      var params = {
        query: this.get('query'),
        author: this.get('author'),
        note: this.get('note')
      };
      this.set('updateQuestion', false);
      this.sendAction('update', question, params);
    },
    cancel() {
      this.set('updateQuestion', false);
      this.set('query', '');
      this.set('author', '');
      this.set('note', '');
    }
  }
});
