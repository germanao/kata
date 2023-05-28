public static class Kata
{
 public static int Pillars(int numPill, int dist, int width)
  {
    return numPill < 2 ? 0 : ((numPill - 1) * dist) * 100 + (numPill - 2) * width;
  }
}