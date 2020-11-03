class RandomizeItems {
    constructor() {
        this.randomize;
    }
    randomize(data) {
        let items = data, shuffled = [];
        let counter = 0;
        let runShuffle = true;
        if (items.length < 3) {
            throw new Error("typeof args must be a string[] or int[] & lenght > 3")
        }
        try {
            while (runShuffle) {
                let rnd = Math.floor(Math.random() * shuffled.length);
                shuffled.splice(rnd, 0, items[counter]);
                if (shuffled.length > 1) {
                    let lastIndex = shuffled[shuffled.length - 1];
                    shuffled.pop();
                    shuffled.splice(rnd, 0, lastIndex);
                }
                counter += 1;
                if (shuffled.length === items.length) runShuffle = false;
            }
            return shuffled;
        } catch (error) { }

    }
}