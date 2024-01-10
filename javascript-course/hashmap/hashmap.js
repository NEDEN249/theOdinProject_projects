//hashmap factory function
function myHashMap(){
    //initial hashmap size limit
    let hashMapSzLimit = 16;
    //creates a new hashmap 
    const createHashMap = () => {
        const hashMap = Array(hashMapSzLimit).fill(null).map(() => []);
        return hashMap;
    };
    //initial hashmap
    let hashmap = createHashMap();
    let numKeys = 0;

    //hashing function
    const hashingFunction = (string) => {
        let hashCode = 0;
        const primeNumber = 31;
        for (let i = 0; i < string.length; i++) {
            hashCode = (primeNumber * hashCode + string.charCodeAt(i)) % hashMapSzLimit;
        }
        
        return hashCode;
    };
    
    //checks if the index is out of bounds
    const outOfBounds = (index) => {
        if (index < 0 || index >= hashMapSzLimit){
            throw new Error("index out of bounds");
        }
    };

    //returns the current hash map's load factor
    const returnLoadFactor = () => {
        let loadFactor = 0;
        for(let i = 0; i < hashMapSzLimit; i++){
            loadFactor += hashmap[i].length;
        }
        return loadFactor / hashMapSzLimit;
    };

    //if the hashMap is more than 75% full, double the size of the hashMap
    const handleLoadFactor = () => {
        if (returnLoadFactor() < 0.75) {
            return;
        }
        hashMapSzLimit *= 2;
        //create new hashmap
        const newHashMap = createHashMap();
        //iterate through old hashmap
        let oldValues = entries();
        //rehash old values
        oldValues.forEach(element => {
            const [key, value] = element;
            const keyGen = hashingFunction(key);
            newHashMap[keyGen].push({key, value});
        });
        //set new hashmap
        hashmap = newHashMap;
    };
    const set = (key, value) => {
        const keyGen = hashingFunction(key);
        outOfBounds(keyGen);
        const collision = hashmap[keyGen].findIndex(
            (element) => element.key === key
        );
        if (collision !== -1){
            hashmap[keyGen][collision].value = value;
        } else {
            hashmap[keyGen].push({key, value});
            numKeys++;
        }
        handleLoadFactor(); 
    };

    const get = (key) => {
        const keyGen = hashingFunction(key);
        outOfBounds(keyGen);
        const value = hashmap[keyGen].find(
            (element) => element.key === key
        );
        if (value) return value.value;
        return null;
    };

    const has = (key) => {
        const keyGen = hashingFunction(key);
        outOfBounds(keyGen);
        const value = hashmap[keyGen].find(
            (element) => element.key === key
        );
        if (value) return true;
        return false;
    };

    const remove = (key) => {
        const keyGen = hashingFunction(key);
        outOfBounds(keyGen);
        const value = hashmap[keyGen].findIndex(
            (element) => element.key === key
        );
        if (value !== -1){
            hashmap[keyGen].splice(value, 1);
            numKeys--;
        }
    };

    const length = () => {
        return numKeys;
    };

    const clear = () => {
        hashmap = createHashMap();
        numKeys = 0;
    };

    const keys = () => {
        const keys = [];
        hashmap.forEach(array => {
            array.forEach(element => {
                const {key, value} = element;
                keys.push(key);
            });
        });
        return keys;
    };

    const values = () => {
        const values = [];
        hashmap.forEach(array => {
            array.forEach(element => {
                const {key, value} = element;
                values.push(value);
            });
        });
        return values;
    };

    const entries = () => {
        const entries = [];
        hashmap.forEach(array => {
            array.forEach(element => {
                const {key, value} = element;
                entries.push([key, value]);
            });
        });
        return entries;
    };

    return{
        createHashMap,
        hashingFunction,
        outOfBounds,
        returnLoadFactor,
        handleLoadFactor,
        set,
        get,
        has,
        remove,
        length,
        clear,
        keys,
        values,
        entries
    };
}

//testing that all functions work as intended
const mHashMap = myHashMap();
mHashMap.set("name", "John");
mHashMap.set("age", 30);
mHashMap.set("height", 180);
mHashMap.set("weight", 80);
console.log(mHashMap.entries());
console.log(mHashMap.get("name"));
mHashMap.set("name", "Jane");
console.log(mHashMap.get("name"));
console.log(mHashMap.entries());
console.log(mHashMap.has("name")); 
mHashMap.remove("name");
console.log(mHashMap.has("name"));
console.log(mHashMap.keys());
console.log(mHashMap.values());
console.log(mHashMap.length());
mHashMap.clear();
console.log(mHashMap.entries());
console.log(mHashMap.length());

//here I am testing if the load factor functions are working correctly 
mHashMap.set("1", "A");
mHashMap.set("2", "B");
mHashMap.set("3", "C");
mHashMap.set("4", "D");
mHashMap.set("5", "E");
mHashMap.set("6", "F");
mHashMap.set("7", "G");
mHashMap.set("8", "H");
mHashMap.set("9", "I");
mHashMap.set("10", "J");
mHashMap.set("11", "K");
mHashMap.set("12", "L");
mHashMap.set("13", "M");
mHashMap.set("14", "N");
mHashMap.set("15", "O");
mHashMap.set("16", "P");
//the initial max size has been fully exceeded
mHashMap.set("17", "Q");
console.log(mHashMap.length()); //returns 17 implying handleLoadFactor is working correctly
