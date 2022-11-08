var notes = (function() {
    var list = [];

    return {
        add: function(note) {
            if (note) {
                var item = {timestamp: Date.now(), text: note};
                list.push(item);
                return true;
            }
            return false;
        },
        remove: function(index) {
            if(index == null){
                return false;
            }
            list.splice(index, 1);
            return true;
        },
        count: function() {
            return list.length;
        },
        list: function() {
            return list;
        },
        find: function(str) {
            var test = false;
            for(var text in Object.keys(list)){
                var value = list[text];
                console.log(value.text);
                if(value.text.includes(str)) test = true;
            }
            console.log(list);
            console.log(str);
            return test;
        },
        clear: function() {
            list.splice(0, list.length);
            return true;
        },
    }
}());