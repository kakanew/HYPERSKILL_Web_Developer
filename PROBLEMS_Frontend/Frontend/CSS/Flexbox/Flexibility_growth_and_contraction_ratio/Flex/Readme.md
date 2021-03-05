## Flex

Using `flex` property, write a code that defines the following behavior:

If there is free space, the first product should get 1/7 from it, the second one should get 4/7 and the last one should get the remaining 2/7. But if the size of the catalog is too small to fit all the products, they will be reduced by 1/5, 2/5, and 2/5 of the remaining space, respectively. The initial size of each section should be set to **6em**.

When you complete all the tasks, don't rush to press the 'send' button. Use this task as a sandbox: try to change the `flex-basis` value of the `.product` and observe how the output will change. But don't forget to send the solution when you're done experimenting.

Hint

> As we already know, the distribution of the free space is defined by flex-grow or flex-shrink properties. If there is free space you should apply flex-grow to each element considering the sum of values should be equal to 7. If there is no free space and the items are overflowing, you should do the same but will flex-shrink and amount of values equal to 5.

### [HYPERSKILL_Web_Developer](https://github.com/kakanew/HYPERSKILL_Web_Developer)

