const resolvedPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(resolve({ message: "delayed success!" }), 500);
  });

const rejectPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(reject({ error: "delayed exception!" }), 500);
  });


console.log("---QUESTION_TWO---")
resolvedPromise()
.then((succ) => console.log(succ))
.finally(() => console.log("Finally"));

rejectPromise()
.catch((err) => console.error(err))
.finally(() => console.log("Finally"));