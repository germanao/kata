// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");

Kata.Metodo();

public class Kata {

    public static int Fib(int n)
    {
           if (n==1||n==2)
            {
                return 1;
            }
            return Fib(n - 1) + Fib(n - 2);
    }

    public static void Metodo(){
        Console.WriteLine(Fib(0));
    }
}


 