var webdriver = require('selenium-webdriver');
var client = new webdriver.Builder().
withCapabilities(webdriver.Capabilities.firefox()).
build();


const ValidEmail = 'vahe@gmail.com';
const ValidPassword = '54f44ff40q';
const ValidFN = 'Vahe';
const ValidLN = 'Hakobyan';
const ValidBirt = '25/07/1992';
const ValidGender = 'Male';

var URL = 'http://pradicts.com:8080/';
client.get(URL).then(function() {
    client.findElement({ css: '.btn-success' }).click();


    client.getTitle().then(function(title) {
      if(client.findElement({ css: 'a.btn:nth-child(2)' }).isEnabled())
      {
        console.log('test passed');
      }
      else {
        console.log(test.failed);
      }
    });
    client.findElement({ css: 'a.btn:nth-child(2)'}).click();
    client.getTitle().then(function(title) {
      if(client.findElement({ css: 'a.btn:nth-child(2)' }).isEnabled())
      {
        console.log('test passed');
      }
      else {
        console.log('test.failed');
      }
    });
   client.findElement({ css: '#auth-form > div:nth-child(2) > div:nth-child(1) > input:nth-child(1)'}).sendKeys('vahemailru');
    client.findElement({ css: 'a.btn:nth-child(2)'}).click();
    client.getTitle().then(function(title) {
      if(client.findElement({ xpath: '/html/body/div[1]/div/div[2]/div/div/div/div[2]/div/form/div[2]/div/a' }).isDisplayed())
      {
        console.log('test passed');
      }
      else {
        console.log('test.failed');
      }
    });
    client.findElement({ css: '#auth-form > div:nth-child(2) > div:nth-child(1) > input:nth-child(1)'}).clear();
    client.findElement({ css: '#auth-form > div:nth-child(2) > div:nth-child(1) > input:nth-child(1)'}).sendKeys('@gmail');
     client.findElement({ css: 'a.btn:nth-child(2)'}).click();
     client.getTitle().then(function(title) {
       if(client.findElement({ xpath: '/html/body/div[1]/div/div[2]/div/div/div/div[2]/div/form/div[2]/div/a' }).isDisplayed())
       {
         console.log('test passed');
       }
       else {
         console.log('test.failed');
       }
     });

     client.findElement({ css: '#auth-form > div:nth-child(2) > div:nth-child(1) > input:nth-child(1)'}).clear();
     client.findElement({ css: '#auth-form > div:nth-child(2) > div:nth-child(1) > input:nth-child(1)'}).sendKeys('@gmail..com');
      client.findElement({ css: 'a.btn:nth-child(2)'}).click();
      client.getTitle().then(function(title) {
        if(client.findElement({ xpath: '/html/body/div[1]/div/div[2]/div/div/div/div[2]/div/form/div[2]/div/a' }).isDisplayed())
        {
          console.log('test passed');
        }
        else {
          console.log('test.failed');
        }
      });
      client.findElement({ css: '#auth-form > div:nth-child(2) > div:nth-child(1) > input:nth-child(1)'}).clear();
      client.findElement({ css: '#auth-form > div:nth-child(2) > div:nth-child(1) > input:nth-child(1)'}).sendKeys('vahe@gmail');
       client.findElement({ css: 'a.btn:nth-child(2)'}).click();
       client.getTitle().then(function(title) {
         if(client.findElement({ xpath: '/html/body/div[1]/div/div[2]/div/div/div/div[2]/div/form/div[2]/div/a' }).isDisplayed())
         {
           console.log('test passed');
         }
         else {
           console.log('test.failed');
         }
       });

       client.findElement({ css: '#auth-form > div:nth-child(2) > div:nth-child(1) > input:nth-child(1)'}).clear();
       client.findElement({ css: '#auth-form > div:nth-child(2) > div:nth-child(1) > input:nth-child(1)'}).sendKeys('vahe@127.0.0.1');
        client.findElement({ css: 'a.btn:nth-child(2)'}).click();
        client.getTitle().then(function(title) {
          if(client.findElement({ xpath: '/html/body/div[1]/div/div[2]/div/div/div/div[2]/div/form/div[2]/div/a' }).isDisplayed())
          {
            console.log('test passed');
          }
          else {
            console.log('test.failed');
          }
        });

        client.findElement({ css: '#auth-form > div:nth-child(2) > div:nth-child(1) > input:nth-child(1)'}).clear();
        client.findElement({ css: '#auth-form > div:nth-child(2) > div:nth-child(1) > input:nth-child(1)'}).sendKeys('vahe@gmailcom');
         client.findElement({ css: 'a.btn:nth-child(2)'}).click();
         client.getTitle().then(function(title) {
           if(client.findElement({ xpath: '/html/body/div[1]/div/div[2]/div/div/div/div[2]/div/form/div[2]/div/a' }).isDisplayed())
           {
             console.log('test passed');
           }
           else {
             console.log('test.failed');
           }
         });
         client.findElement({ css: '#auth-form > div:nth-child(2) > div:nth-child(1) > input:nth-child(1)'}).clear();
         client.findElement({ css: '#auth-form > div:nth-child(2) > div:nth-child(1) > input:nth-child(1)'}).sendKeys('vahe@gmail.com');
          client.findElement({ css: 'a.btn:nth-child(2)'}).click();
          client.getTitle().then(function(title) {
            if(client.findElement({ xpath: '/html/body/div[1]/div/div[2]/div/div/div/div[2]/div/form/div[2]/div/a' }).isDisplayed())
            {
              console.log('test failed');
            }
            else {
              console.log('test.passed');
            }
          });
    client.quit();
});
