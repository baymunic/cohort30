## Что отличает хорошего программиста?
- 
-



## Зачем нам нужны переменные? 


**Переменная** - это область памяти, имеющая:
* имя
* тип

Типы бывают - int (целое число), String (строка, набор символов) и другие.

Память в компьютере - это набор большого кол-ва ячеек. У кажой ячейки есть адрес.

Для создания переменной надо придумать имя и задать тип.
Имя переменной начинаем с маленькой буквы - напрмер numMax
Нельзя начинать имя перменной с цифры.

snake_case и camelCase - это соглашения о наименовании переменных.

**Зачем нужны переменные?**
- 
- 

Для вывода данных на экран мы использовали **System.out.** (Класс и метод)

Для ввода данных будем использовать **System.in.** (Класс и метод)

##  Чтение данных (ввод данных) с клавиатуры

### Алгоритм организации ввода данных с клавиатуры:
* Шаг 1. import необходимых библиотек в код программы
* Шаг 2. Инициализация классов и методов для чтения вводимых данных
* Шаг 3. Приглашение пользователю с помощью System.out.println("Введите ...");
* Шаг 4. Выбор типа переменной, придумывание ей имени, выбор метода чтения;
* Шаг 5. Использование полученных данных с помощью System.out.println("Сообщение о чем то ...").

**Вариант 1**
`import java.io.*;

Reader inputStreamReader = new InputStreamReader(System.in);
BufferedReader bufferedReader = new BufferedReader(inputStreamReader);

System.out.println("Введите ..."); // приглашение пользователю
String name = bufferedReader.readLine(); //читаем строку с клавиатуры

System.out.println("Введите ..."); // приглашение пользователю
String sAge = bufferedReader.readLine(); //читаем строку с клавиатуры
int nAge = Integer.parseInt(sAge); //преобразовываем строку в число.`

Более компактная запись:

`BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

System.out.println("Введите ..."); // приглашение пользователю
String name = br.readLine(); // читаем строку
System.out.println("Введите ..."); // приглашение пользователю
String sAge = br.readLine(); // читаем строку
int nAge = Integer.parseInt(sAge); // преобразовываем строку в целое число`

**Вариант 2**
import java.util.Scanner;

Scanner sc = new Scanner(System.in);
String name = sc.next(); // - чтение строки до символа " "
String name = sc.nextLine(); // - чтение строки до символа "ввод"
int num = sc.nextInt(); // - чтение целого числа
int double = sc.nextDouble(); // - чтение числа c десятичной дробной частью

* Подробности про класс BufferedReader: https://javarush.com/groups/posts/1919-schitihvanie-s-klaviaturih--riderih
* Подробности про класс Scanner: https://javarush.com/groups/posts/klass-scanner


