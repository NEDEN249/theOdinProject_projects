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
        let oldValues = keys();
        //rehash old values
        oldValues.forEach(element => {
            const [key] = element;
            const keyGen = hashingFunction(key);
            newHashMap[keyGen].push({key});
        });
        //set new hashmap
        hashmap = newHashMap;
    };
    const set = (key) => {
        const keyGen = hashingFunction(key);
        outOfBounds(keyGen);
        if(has(key)){
            return;
        }
        hashmap[keyGen].push({key});
        handleLoadFactor(); 
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
                const {key} = element;
                keys.push(key);
            });
        });
        return keys;
    };

    return{
        createHashMap,
        hashingFunction,
        outOfBounds,
        returnLoadFactor,
        handleLoadFactor,
        set,
        has,
        remove,
        length,
        clear,
        keys
    };
}

mHashMap = myHashMap();
mHashMap.set("hello");
mHashMap.set("world");
//mHashMap.remove("hello"); //should not be inserting hello
console.log(mHashMap.has("hello"));
console.log(mHashMap.keys());

