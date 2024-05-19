function inRaMang(input: string | string[]): void {
    if (typeof input === 'string') {
        console.log(input);
    } else if (Array.isArray(input)) {
        input.forEach(item => console.log(item));
    } else {
        throw new Error('wrong.');
    }
}

// Sử dụng
const stringInput: string = "Hello";
const arrayInput: string[] = ["Dua", "Dau tay", "Cam"];

inRaMang(stringInput);
inRaMang(arrayInput); 
                      
                     