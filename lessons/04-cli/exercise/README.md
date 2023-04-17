# Exercise: CLI

The goal of this exercise is to make a CLI menu system that allows the user to select which lesson and then lecture or exercise they want to see. The end result will be to `console.log` the `lessonType` which will be `exercise` or `lecture`. Then to also `console.log` an array of files from that respective exercise or lecture.

Here's a brief explanation of the functions you'll need to solve the tasks:

```js
// Clear the console
console.clear()

// __dirname is where the index.ts file is. We can use relative paths
// from there (.. to go up)
path.resolve(__dirname, '..')

// Gets an array of files and folders from
const filesAndFolders = fs.readdirSync('path')

// This will tell you if a path is a directory
fs.lstatSync('/path').isDirectory()

// This will present the user with a CLI based menu based on this
// array of options. The choice returned is the index of the array
const choice = readlineSync.keyInSelect(['Option One', 'Option Two'])

// Tells Node to exit. You'll use this when someone selects "Cancel"
// in the menu to stop Node
process.exit(0)
```

## Task 1 (Mostly Finished For you)

Task one is almost finished, it just needs to know what path the `lessons` folder is at (two levels above us). When you get the `path.resolve()` working, you should see a menu that shows up with the folders in the lessons folder. Then when you make a selection you should see your selection console logged to output.

One thing you need to finish though is the cancellation option. If the user selects the Cancel option, exit Node.

## Task 2

Do similar steps to then show a menu for the sub-folders of the chosen lesson. This should get you the `lessonType` which will be `exercise` or `lecture`. Then get the files and folders of the exercise or lecture chosen.

It would also be nice to do `console.clear()` at appropriate times to give the user a new menu without seeing the old menu above it.

## Task 3

Add a "Back" feature to the menu. In other words, the menu shown to the user can be an array of anything, so add a "Back" option when the user is looking at the sub-folders of the lessons to go back to the top main menu. The recommended approach is to put the entire menu system logic into a potential infinite loop that will only break out when a `lessonType` is chosen:

```js
while (!lessonType) {}
```

JavaScript has a `continue` statement to reset the loop when the choose to go back
