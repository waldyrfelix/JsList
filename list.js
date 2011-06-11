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
        get: function (index) {
            if (this.count() == 0) {
                throw new Error("The list is empty.");
            }
			if(index < 0 || index >= this.count()){
				throw new Error("The index is out of range.");
			}
            return internalList[index];
        },
        remove: function (item) {
            var indexToRemove = -1;

            for (var i = 0; i < this.count(); i++) {
                if (item == internalList[i]) {
                    indexToRemove = i;
                    break;
                }
            }

            if (indexToRemove > -1) {
                internalList.splice(indexToRemove, 1);
            }
        }
    };
}