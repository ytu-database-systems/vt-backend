# Nasıl Kullanılır?
        
        Öncelikle bilgisayarınızda Node.js^12 ve npm paketinin kurulu olduğundan emin olunuz.
        Ardından vt-backend/Backend dizinine gelip terminal/cmd üzerinden `npm install` komutunu kullanarak
        projenin ihtiyaç duyacağı paketlerin kurulması gerekmektedir.

        Son olarak aynı dizinde `node server.js` komutunu kullanarak projeyi çalıştırabilirsiniz.
        
       
# DEVELOPMENT Mod
        Geliştirme süresince kolaylık sağlaması açısından nodemon paketi kullanılabilir.
        Buna istinaden terminal/cmd üzerinden `npm install nodemon -g` komutulu ile global 
        olarak nodemon paketi kurulduktan sonra, vt-backend/Backend dizininde `nodemon server.js` komutu
        kullanılabilir. Sistem bu şekilde çalıştırılırsa, kod üzerinde yapacağınız her değişiklik anlık olarak
        sisteme yansıyacaktır ve sürekli olarak kapatıp tekrar başlatmak zorunda kalınmayacaktır.
