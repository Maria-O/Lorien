define(function () {
    'use strict';

    var EmailModel = {
        init: function(){
            var self = this;
            this.pr = new Promise(function(resolve){
                $.getJSON("js/email-collection/mails.json", function(data){
                    $(document).trigger('loadData', data);
                    self.emailsCollection = data;
                    resolve();
                });
            });
            return this.pr;
        },
        getCollection: function(){
            return this.emailsCollection;
        },
        getEmail: function(i){
            return this.emailsCollection.inbox[i];
        }
    };
    return EmailModel;
});




