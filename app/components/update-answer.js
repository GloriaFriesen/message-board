import Ember from 'ember';

export default Ember.Component.extend({
  updateAnswerForm: false,
  actions: {
    showUpdateForm() {
      this.set('updateAnswerForm', true);
    },
    updateAnswer(answer) {
      var params = {
        author: this.get('author'),
        content: this.get('content')
      };
      this.set('updateAnswerForm', false);
      this.sendAction('updateAnswer', answer, params);
    },
    cancel() {
      this.set('updateAnswerForm', false),
      this.set('author', ''),
      this.set('content', '')
    },
    deleteAnswer(answer) {
      this.sendAction('deleteAnswer', answer);
    }
  }
});
