import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.ArrayList;

public class Day1InOneClass {

  static int ik = 123;
  static String missingAnA = "kuty";
  static int[] myList1 = {1, 2, 3};
  static int[] myList2 = {4, 5};
  static int[] iWantToSumThis = {3, 4, 5, 6, 7};
  static int[] notSoUnique = {1, 3, 1, 5, 11, 83, 11};

  public static void main(String[] args) {
    //doubling
    System.out.println(doubling(ik));
    //appendA
    System.out.println(appendA(missingAnA));
    //refactorio
    System.out.println(factorio(5));
    //compare length
    System.out.println(compareTheLengthOfTwoArray(myList1, myList2));
    //sum all elements
    System.out.println(sumElementsInTheArray(iWantToSumThis));
    //unique
    System.out.println(unique(notSoUnique));
    //anagram
    System.out.println(anagramChecker("action man", "cannot aim"));
    //palindrome searcher
    System.out.println(palindromeSearcher("dog goat dad duck doodle never"));
  }
  //doubling
  private static int doubling(int doubleThis) {
    return doubleThis * 2;
  }
  //appendA
  private static String appendA(String giveItAnA) {
    return giveItAnA + "a";
  }
  //refactorio
  private static int factorio(int theFactorando) {
    if(theFactorando == 1) {
      return 1;
    }
    return theFactorando * factorio(theFactorando - 1);
  }
  //compare length
  private static boolean compareTheLengthOfTwoArray(int[] array1, int[] array2) {
    return  array1.length == array2.length;
  }
  //sum all elements
  private static int sumElementsInTheArray(int[] sumThis) {
    int sum = 0;

    for (int i = 0; i < sumThis.length; i++) {
      sum += sumThis[i];
    }
    return sum;
  }
  //unique
  private static String unique(int[] thereMayBeMultiplication) {
    int[] uniqueOnes = new int[0];

    for (int i = 0; i < thereMayBeMultiplication.length; i++) {
      boolean isItUnique = true;
      int uniqueOnesNextIndex = 0;

      for (int j = 0; j < uniqueOnes.length; j++) {
        if (uniqueOnes[j] == thereMayBeMultiplication[i]) {
          isItUnique = false;
        }
        uniqueOnesNextIndex = j + 1;
      }
      if (isItUnique) {
        uniqueOnes = Arrays.copyOf(uniqueOnes, uniqueOnes.length + 1);
        uniqueOnes[uniqueOnesNextIndex] = thereMayBeMultiplication[i];
      }
    }
    return Arrays.toString(uniqueOnes);
  }
  //anagram
  private static boolean anagramChecker(String text1, String text2) {

    if(text1.length() != text2.length()) {
      return false;
    }

    String[] textArr1 = text1.split("");
    String[] textArr2 = text2.split("");

    Arrays.sort(textArr1);
    Arrays.sort(textArr2);

    for (int i = 0; i < textArr1.length; i++) {
      if(Arrays.toString(textArr1).charAt(i) != Arrays.toString(textArr2).charAt(i)) {
        return false;
      }
    }
    return true;
  }
  //palindrome searcher
  private static String palindromeSearcher(String possiblePalindromeText) {
    String[] outPut = {};
    int currentIndex = 0;

    for (int i = 0; i < possiblePalindromeText.length(); i++) {
      for (int j = 0; j < possiblePalindromeText.length() - i - 2; j++) {
        if(i - j >= 0){
          if (possiblePalindromeText.charAt(i - j) == possiblePalindromeText.charAt(i + 2 + j)) {
            outPut = Arrays.copyOf(outPut, currentIndex + 1);
            outPut[currentIndex] = possiblePalindromeText.substring(i - j, i + 3 + j);
            currentIndex++;
          } else {
            break;
          }
        }
      }
      for (int j = 0; j < possiblePalindromeText.length() - i - 1; j++) {
        if(i - j >= 0){
          if (possiblePalindromeText.charAt(i - j) == possiblePalindromeText.charAt(i + 1 + j)) {
            outPut = Arrays.copyOf(outPut, currentIndex + 1);
            outPut[currentIndex] = possiblePalindromeText.substring(i - j, i + 2 + j);
            currentIndex++;
          } else {
            break;
          }
        }
      }
    }
    return Arrays.toString(outPut);
  }
}
