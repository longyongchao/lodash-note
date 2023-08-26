/**
  test：在每个测试开始时触发。
  test end：在每个测试结束时触发。
  pass：在每个测试通过时触发。
  fail：在每个测试失败时触发。
  pending：在每个挂起（pending）的测试时触发。
  suite：在每个测试套件（suite）开始时触发。
  suite end：在每个测试套件结束时触发。
  hook：在每个钩子函数（before, after, beforeEach, afterEach）开始时触发。
  hook end：在每个钩子函数结束时触发。
  start：在测试运行开始时触发。
  end：在测试运行结束时触发。
*/


class Reporter {
  constructor(runner) {
    this.passedTests = 0;
    this.failedTests = 0;

    runner.on('pass', this.onTestPass.bind(this));
    runner.on('fail', this.onTestFail.bind(this));
    runner.on("test", this.onTestStart.bind(this));
    runner.on("test end", this.onTestEnd.bind(this));
    runner.on("start", this.onRunStart.bind(this));
    runner.on("end", this.onRunEnd.bind(this));
  }

  /**
   * @abstract 在任一测试通过时触发
   * @param {*} test 
   */
  onTestPass(test) {
    this.passedTests++;
  }

  /**
   * @abstract 在任一测试失败时触发
   * @param {*} test 
   * @param {*} err 
   */
  onTestFail(test, err) {
    this.failedTests++;
  }

  /**
   * @abstract 在任一测试开始时触发
   * @param {*} test 
   */
  onTestStart(test) {
    this.startTime = Date.now();
  }

  /**
   * @abstract 在任一测试结束时触发
   * @param {*} test 
   */
  onTestEnd(test) {
    const endTime = Date.now();
    const duration = endTime - this.startTime;

    var message = '';
    if (test.state === 'passed') {
      message += '\u001b[32m\u2714\u001b[0m'
    } else if (test.state === 'failed') {
      message += '\u001b[31m\u2718\u001b[0m'
    }

    message += `【${test.fullTitle()}】 took ${duration}ms`
    console.log(message);
  }

  onRunStart() {
    console.log('');
  }

  /**
   * @abstract 在整个流程结束时触发
   */
  onRunEnd() {
    console.log('');
    console.log(`Passed tests: ${this.passedTests}`);
    console.log(`Failed tests: ${this.failedTests}`);
    console.log('');
  }
}

module.exports = Reporter;
