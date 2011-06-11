function List(){
    var internalList = [];

    return {
        count: function () {
            return internalList.length;
        },
        add: function (item) {
            internalList.push(item);
        },
        empty: function () {
            internalList.splice(0, this.count());
        },
		isEmpty: function(){
			return this.count() == 0;
		},
        get: function (index) {
            if (this.isEmpty())
                throw new Error("The list is empty.");
				
			if(index < 0 || index >= this.count())
				throw new Error("The index is out of range.");
			
            return internalList[index];
        },
        remove: function (item) {
            var indexToRemove = -1;

            for (var index = 0; index < this.count(); index++) {
                if (item == internalList[index]) {
                    indexToRemove = index;
                    break;
                }
            }

            if (indexToRemove > -1) {
                internalList.splice(indexToRemove, 1);
            }
        }
    };
}