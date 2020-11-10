function ValidateLog (log) {
    let result = log.match(/admin/);
    console.log(result);
    return log.length === 5 && result 
}

function ValidatePass (pass) {
    let result = pass.match(/12345/);
    console.log(result);
    return pass.length === 5 && result 
  }

  

  export {
    ValidateLog,
    ValidatePass,
  };